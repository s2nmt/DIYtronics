#!/usr/bin/env python3
"""Generate STM32 OTA series parts 3–16 body HTML from planned outline + repo facts."""
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "src" / "content" / "articles"
REPO = "https://github.com/s2nmt/STM32F103C8T6-ota-base-metal"
BLOB = f"{REPO}/blob/main"
TREE = f"{REPO}/tree/main"

PARTS = [
    # (n, slug, short_title, filename_stem)
    (3, "stm32-ota-bare-metal-part-3-main", "bootloader main.c", "stm32-ota-bare-metal-part-3-main"),
    (4, "stm32-ota-bare-metal-part-4-rcc-system", "RCC & system", "stm32-ota-bare-metal-part-4-rcc-system"),
    (5, "stm32-ota-bare-metal-part-5-gpio", "GPIO", "stm32-ota-bare-metal-part-5-gpio"),
    (6, "stm32-ota-bare-metal-part-6-uart", "UART", "stm32-ota-bare-metal-part-6-uart"),
    (7, "stm32-ota-bare-metal-part-7-flash", "Flash", "stm32-ota-bare-metal-part-7-flash"),
    (8, "stm32-ota-bare-metal-part-8-nvic-tick-iwdg", "NVIC / tick / IWDG", "stm32-ota-bare-metal-part-8-nvic-tick-iwdg"),
    (9, "stm32-ota-bare-metal-part-9-crypto", "Crypto", "stm32-ota-bare-metal-part-9-crypto"),
    (10, "stm32-ota-bare-metal-part-10-bootloader", "bootloader.c", "stm32-ota-bare-metal-part-10-bootloader"),
    (11, "stm32-ota-bare-metal-part-11-img-verify", "img & verify", "stm32-ota-bare-metal-part-11-img-verify"),
    (12, "stm32-ota-bare-metal-part-12-ota-parser", "OTA parser", "stm32-ota-bare-metal-part-12-ota-parser"),
    (13, "stm32-ota-bare-metal-part-13-ota-handlers", "OTA handlers", "stm32-ota-bare-metal-part-13-ota-handlers"),
    (14, "stm32-ota-bare-metal-part-14-application", "Application", "stm32-ota-bare-metal-part-14-application"),
    (15, "stm32-ota-bare-metal-part-15-startup-linker", "Startup & linker", "stm32-ota-bare-metal-part-15-startup-linker"),
    (16, "stm32-ota-bare-metal-part-16-tools", "Host tools", "stm32-ota-bare-metal-part-16-tools"),
]

# Previous published
def nav(part: int) -> str:
    if part == 3:
        prev = ("stm32-ota-bare-metal-part-2-keygen", "keygen.py")
    else:
        p = PARTS[part - 4]
        prev = (p[1], p[2])

    nxt = None
    if part < 16:
        n = PARTS[part - 2]
        nxt = (n[1], n[2])

    bits = [
        'Series: <a href="blog/series/stm32-ota-bare-metal">STM32F103 Bare-Metal Secure OTA Bootloader</a>'
    ]
    bits.append(f' — <a href="articles/{prev[0]}">Part {part - 1}: {prev[1]}</a>')
    if nxt:
        bits.append(f' — next: <a href="articles/{nxt[0]}">Part {part + 1}: {nxt[1]}</a>')
    return "<p>" + "".join(bits) + ".</p>\n"


def footer(part: int) -> str:
    lines = ['<h2 id="next">Next</h2><ul>']
    if part < 16:
        n = PARTS[part - 2]
        lines.append(f'  <li><a href="articles/{n[1]}">Part {part + 1}: {n[2]}</a></li>')
    lines.append('  <li><a href="blog/series/stm32-ota-bare-metal">Series index</a></li>')
    lines.append(
        f'  <li><a href="{REPO}" target="_blank" rel="noopener noreferrer">GitHub repository</a></li>'
    )
    lines.append("</ul>")
    return "\n".join(lines) + "\n"


def src(path: str, label: str | None = None) -> str:
    lab = label or f"<code>{path}</code>"
    return f'<a href="{BLOB}/{path}" target="_blank" rel="noopener noreferrer">{lab}</a>'


BODIES = {}

BODIES[3] = lambda: f"""{nav(3)}
<p>Source: {src("bootloader/Src/main.c")} in <a href="{REPO}" target="_blank" rel="noopener noreferrer">STM32F103C8T6-ota-base-metal</a>.</p>
<p>This post walks through the bootloader entry point. After reset, <code>main()</code> decides among three paths: honor an app-requested OTA flag, verify and jump a signed slot, or sit in the UART OTA receiver.</p>

<h2 id="boot-flow">1. Boot decision flow</h2>
<pre><code>reset
  → enable IRQ, init clocks/GPIO/UART
  → if OTA flag set → clear flag → ota_run()
  → else pick a valid signed slot
       → wait 3 s for key 'U'
       → no key → jump_to_application()
       → key pressed → ota_run()
  → no valid slot → ota_run()
  → after OTA idle timeout → retry pick / OTA loop</code></pre>

<h2 id="helpers">2. Helpers in main.c</h2>
<ul>
  <li><strong><code>_write</code></strong> — retargets <code>printf</code> to <code>uart1_write</code> so logs go out USART1.</li>
  <li><strong><code>boot_poll_ota_key</code></strong> — drains the UART RX ring; returns 1 if byte <code>OTA_UPDATE_KEY</code> (<code>'U'</code>) arrived.</li>
  <li><strong><code>boot_pick_slot</code></strong> — tries active then inactive slot via <code>boot_verify_slot()</code> (SHA-256 + ECDSA). First success wins.</li>
  <li><strong><code>boot_wait_ota_key</code></strong> — flushes RX, prints a prompt, polls for <code>BOOT_WAIT_MS</code> (3000 ms).</li>
  <li><strong><code>boot_enter_ota</code></strong> — prints <code>OTA RX ready</code>, calls <code>ota_run(OTA_IDLE_TIMEOUT_MS)</code>.</li>
</ul>

<h2 id="main">3. <code>main()</code> step by step</h2>
<pre><code>__asm volatile("cpsie i");
init();
SystemClock_Config();
GPIO_Init();
Uart1_Init();
printf("STM32F103 Bootloader\\r\\n");

if (ota_flag_is_set()) {{
    (void)ota_flag_clear();
    boot_enter_ota();
}}

if (boot_pick_slot(...) == 0) {{
    if (!boot_wait_ota_key(BOOT_WAIT_MS)) {{
        jump_to_application(jump_addr);
    }}
}} else {{
    printf("No valid signed app\\r\\n");
}}
boot_enter_ota();
while (1) {{ /* retry verify + OTA */ }}</code></pre>
<ol>
  <li><strong>IRQ on</strong> — interrupts were possibly off in startup; enable before UART IRQ RX.</li>
  <li><strong>Board bring-up</strong> — same driver stack the app uses (clock, PC13 LED, USART1).</li>
  <li><strong>OTA flag</strong> — the app writes magic <code>0xDEADBEEF</code> at <code>OTA_CONFIG_ADDR</code> then resets. Bootloader clears it and enters OTA immediately (no 3 s wait).</li>
  <li><strong>Normal boot</strong> — verify active/inactive; if OK, give the host 3 s to press <code>U</code> before jumping.</li>
  <li><strong>Fallback</strong> — no image or user requested OTA → stay in the receiver. After idle timeout, try jump again so a successful OTA that already jumped never returns, but a timed-out session can recover.</li>
</ol>

<h2 id="why">4. Why this shape</h2>
<p>The 3-second window lets <code>main.py --enter-ota</code> catch a fresh reset without requiring the app to set the flag. The flag path is for in-field updates when the app is already running. Dual-slot verify-before-jump is the safety net: a bad OTA never becomes the execution image.</p>

{footer(3)}"""

BODIES[4] = lambda: f"""{nav(4)}
<p>Source: {src("bootloader/lib/drivers/inc/types.h")}, {src("bootloader/lib/drivers/inc/conf.h")}, {src("bootloader/lib/drivers/src/rcc.c")}, {src("bootloader/lib/drivers/src/system.c")}.</p>
<p>Before UART or Flash, the MCU needs a stable clock. This layer is pure register programming — no STM32 HAL clock tree helpers.</p>

<h2 id="types-conf">1. <code>types.h</code> and <code>conf.h</code></h2>
<p><code>types.h</code> defines packed register access helpers (bitfield + <code>REG</code> union style) used across drivers. <code>conf.h</code> holds board constants: HSE/HSI assumptions, USART baud, pin maps, and Flash page size (1 KB on the F103 medium-density parts used here).</p>

<h2 id="rcc">2. <code>rcc.c</code></h2>
<p>Thin wrappers to enable peripheral clocks (GPIOA/C, USART1, etc.) by setting the right bits in <code>RCC_APB2ENR</code> / <code>RCC_APB1ENR</code>. Calling these once from <code>init()</code> / MSP keeps the higher-level drivers free of clock noise.</p>

<h2 id="system">3. <code>SystemClock_Config</code></h2>
<p><code>system.c</code> configures the F103 for a typical 72 MHz SYSCLK from HSE + PLL (or a documented HSI fallback in the file). Important side effects:</p>
<ul>
  <li>Flash wait states via <code>flash_latency_config()</code> before raising the clock.</li>
  <li>Prefetch buffer enable for denser instruction fetch.</li>
  <li><code>SystemClock_DeInit()</code> — used by <code>jump_to_application()</code> to leave a clean clock state for the app.</li>
</ul>
<p>Read the full sequence in {src("bootloader/lib/drivers/src/system.c")} — order matters: you must not run Flash at 72 MHz with zero wait states.</p>

<h2 id="takeaway">4. Takeaway</h2>
<p>Clock bring-up is the first place bare-metal projects silently fail. Keeping it in one file makes the rest of the bootloader (UART baud, SysTick 1 ms) deterministic.</p>

{footer(4)}"""

BODIES[5] = lambda: f"""{nav(5)}
<p>Source: {src("bootloader/lib/drivers/src/gpio.c")}.</p>
<p>The Blue Pill LED on <strong>PC13</strong> is the only user-facing GPIO in the bootloader path — useful as a heartbeat while waiting for OTA or after a failed jump.</p>

<h2 id="api">1. API surface</h2>
<ul>
  <li><code>GPIO_Init()</code> — enables GPIOC clock, configures PC13 as push-pull output.</li>
  <li><code>GPIO_Write</code> / <code>GPIO_Toggle</code> — bit-band style set/clear via ODR/BSRR patterns in the driver.</li>
</ul>

<h2 id="registers">2. Register access pattern</h2>
<p>Pins are programmed through <code>CRL</code>/<code>CRH</code> mode bits (output 2/10/50 MHz, CNF push-pull). The driver avoids HAL <code>GPIO_InitTypeDef</code> and writes the packed register fields defined in the local header map.</p>
<pre><code>/* Conceptual */
GPIOC_CRH: MODE13 = output, CNF13 = push-pull
GPIOC_ODR: bit 13 toggled for LED</code></pre>

<h2 id="why-bl">3. Why the bootloader needs GPIO</h2>
<p>During bring-up you can confirm life before trusting UART. The application reuses the same driver to blink once per second — same pin, same code path.</p>

{footer(5)}"""

BODIES[6] = lambda: f"""{nav(6)}
<p>Source: {src("bootloader/lib/drivers/src/uart.c")}.</p>
<p>USART1 is the OTA pipe and the log console. RX is interrupt-driven into a ring buffer; TX is polled for simplicity.</p>

<h2 id="init">1. Init</h2>
<p><code>Uart1_Init()</code> enables GPIOA + USART1 clocks, sets PA9/PA10 to AF push-pull / input floating, programs baud (typically 115200), enables RXNE IRQ, and turns the USART on.</p>

<h2 id="ring">2. Ring buffer RX</h2>
<ul>
  <li><code>USART1_IRQHandler</code> (or the IRQ hook used by this tree) pushes bytes into a fixed circular buffer.</li>
  <li><code>uart1_rx_get(&amp;c)</code> pops one byte; returns 0 if empty.</li>
  <li><code>uart1_rx_flush()</code> clears stale bytes before the 3 s OTA key window.</li>
</ul>
<p>OTA framing in <code>ota.c</code> only reads through this API — never busy-spins on <code>USART_SR.RXNE</code> in the hot path (except TX empty waits).</p>

<h2 id="printf">3. printf</h2>
<p><code>uart1_write(ptr, len)</code> + <code>_write</code> in <code>main.c</code> make <code>printf("…\\r\\n")</code> work in both bootloader and app builds.</p>

<h2 id="pins">4. Wiring</h2>
<p>Host USB–UART adapter: TX→PA10 (USART1_RX), RX→PA9 (USART1_TX), GND common. Match baud with <code>main.py --baud</code>.</p>

{footer(6)}"""

BODIES[7] = lambda: f"""{nav(7)}
<p>Source: {src("bootloader/lib/drivers/src/flash.c")}.</p>
<p>All OTA durability goes through this driver: unlock → erase page → program half-words → lock. Mistakes here brick a slot (recoverable via the other slot or ST-Link).</p>

<h2 id="ops">1. Core operations</h2>
<ul>
  <li><code>flash_unlock</code> / <code>flash_lock</code> — KEY1/KEY2 sequence; LOCK bit in <code>FLASH_CR</code>.</li>
  <li><code>flash_erase_page(addr)</code> — PER + AR + STRT; waits BSY; checks PGERR/WRPRTERR.</li>
  <li><code>flash_write_buffer(addr, data, len)</code> — programs in 16-bit units as required by F1 Flash.</li>
  <li><code>flash_latency_config</code> / <code>flash_prefetch_enable</code> — used during clock setup.</li>
</ul>

<h2 id="safety">2. Safety checks</h2>
<pre><code>flash_addr_in_range()   // stay inside [FLASH_MEM_BASE, FLASH_MEM_END)
flash_page_is_protected() // respect WRPR if set
flash_wait_ready()        // timeout on BSY</code></pre>
<p>Status bits are cleared by writing 1 (RM0008). The driver uses full <code>REG</code> writes to avoid read-modify-write hazards on bitfield structs.</p>

<h2 id="who-calls">3. Callers</h2>
<ul>
  <li><code>ota.c</code> — erase inactive slot pages, write DATA chunks.</li>
  <li><code>ota_flag_clear</code> / app <code>ota_request_enter</code> — rewrite the 1 KB config page at <code>0x0800FC00</code>.</li>
</ul>

{footer(7)}"""

BODIES[8] = lambda: f"""{nav(8)}
<p>Source: {src("bootloader/lib/drivers/src/nvic.c")}, {src("bootloader/lib/drivers/src/tick.c")}, {src("bootloader/lib/drivers/src/iwdg.c")}, {src("bootloader/lib/drivers/src/init.c")}, {src("bootloader/lib/drivers/src/msp.c")}.</p>

<h2 id="nvic">1. NVIC</h2>
<p>Enables USART1 IRQ priority/enable so the RX ring fills in the background. On jump-to-app, <code>bootloader.c</code> disables all NVIC enables/pending bits itself — the NVIC helper is for normal runtime.</p>

<h2 id="tick">2. SysTick</h2>
<p><code>tick.c</code> programs SysTick for 1 ms ticks (<code>tick_get()</code>, <code>delay_ms()</code>). OTA idle timeout and the bootloader's 3 s key window both depend on this free-running counter.</p>

<h2 id="iwdg">3. Independent watchdog</h2>
<p><code>Iwdg_Init</code> / <code>Iwdg_Feed</code> keep long OTA transfers from resetting the MCU. <code>ota.c</code> feeds the dog while waiting for UART bytes.</p>

<h2 id="init-msp">4. <code>init()</code> and MSP</h2>
<p><code>init.c</code> is the single bring-up call from <code>main</code>: Flash prefetch/latency hooks, NVIC/SysTick baseline, then MSP low-level pin/clock prep. Keeping MSP tiny avoids Cube-generated sprawl.</p>

{footer(8)}"""

BODIES[9] = lambda: f"""{nav(9)}
<p>Source: {src("bootloader/lib/crypto/inc/crypto/crypto.h", "<code>crypto.h</code>")}, {src("bootloader/lib/crypto/src/crypto.c")}, {src("bootloader/lib/crypto/src/sha256.c")}, {src("bootloader/lib/crypto/src/uECC.c")} (micro-ecc).</p>

<h2 id="api">1. Thin wrapper API</h2>
<pre><code>crypto_sha256(data, len, out32);
crypto_ecdsa_p256_verify(pubkey64, hash32, sig64);  // 1 = ok
crypto_memcmp_ct(a, b, n);  // constant-time compare</code></pre>
<p><code>verify.c</code> only calls these — hash payload, compare digest to header, verify ECDSA over the digest with <code>bootloader_pubkey</code>.</p>

<h2 id="stack">2. What is underneath</h2>
<ul>
  <li><strong>SHA-256</strong> — local implementation in <code>sha256.c</code>.</li>
  <li><strong>ECDSA P-256</strong> — <a href="https://github.com/kmackay/micro-ecc" target="_blank" rel="noopener noreferrer">micro-ecc</a> (<code>uECC.c</code>) sized for Cortex-M3.</li>
  <li><strong>Public key</strong> — 64-byte uncompressed X||Y from <code>boot_pubkey.c</code> (Part 2).</li>
</ul>

<h2 id="why">3. Why hash-then-sign</h2>
<p>The IMG1 header stores both <code>sha256[32]</code> and <code>signature[64]</code>. The signature is over the hash, not the raw payload — so verify does one digest pass over Flash-mapped payload bytes, then a fixed-size ECDSA verify. That keeps RAM use tiny on a 20 KB device.</p>

{footer(9)}"""

BODIES[10] = lambda: f"""{nav(10)}
<p>Source: {src("bootloader/lib/boot/src/bootloader.c")}, {src("bootloader/lib/boot/inc/bootloader.h")}.</p>

<h2 id="map">1. Flash map (from the header)</h2>
<pre><code>0x08000000  22 KB   Bootloader
0x08005800  20.5 KB APP1 slot (256 B header + payload)
0x0800AA00  20.5 KB APP2 slot
0x0800FC00   1 KB   OTA config (active slot + magic)</code></pre>

<h2 id="slots">2. Active / inactive</h2>
<ul>
  <li><code>app_get_active_start()</code> — reads <code>ota_config_t.active_slot</code>; virgin Flash (0xFF) defaults to APP1.</li>
  <li><code>app_get_inactive_start()</code> — the other slot; OTA always programs the inactive side.</li>
</ul>

<h2 id="valid">3. <code>app_is_valid_at</code></h2>
<p>Sanity-checks the vector table at the payload address: SP in SRAM (<code>0x2000xxxx</code>), Reset_Handler Thumb bit set, entry inside the slot. This catches “signed but linked for the wrong slot” early (also used mid-OTA).</p>

<h2 id="flag">4. OTA flag</h2>
<p><code>ota_flag_is_set</code> — <code>magic == 0xDEADBEEF</code>. Clear rewrites the config page preserving <code>active_slot</code>.</p>

<h2 id="jump">5. <code>jump_to_application</code></h2>
<ol>
  <li>Validate vectors again.</li>
  <li>De-init clock, USART1, SysTick.</li>
  <li><code>cpsid i</code>, clear NVIC enable/pending.</li>
  <li>Set <code>SCB-&gt;VTOR</code> to the app vector table.</li>
  <li>Load MSP from vector[0], <code>bx</code> to Reset_Handler (vector[1]).</li>
</ol>
<p>If anything looks wrong, the function returns and <code>main</code> falls through to OTA.</p>

{footer(10)}"""

BODIES[11] = lambda: f"""{nav(11)}
<p>Source: {src("bootloader/lib/boot/inc/img.h")}, {src("bootloader/lib/boot/src/img.c")}, {src("bootloader/lib/boot/src/verify.c")}.</p>

<h2 id="header">1. IMG1 header (256 bytes)</h2>
<pre><code>typedef struct packed {{
    uint32_t magic;           // 0x494D4731 "IMG1"
    uint32_t image_type;      // APP = 1
    uint32_t payload_offset;  // usually 0x100
    uint32_t payload_size;
    uint32_t version;
    uint32_t reserved0;
    uint8_t  sha256[32];
    uint8_t  signature[64];   // ECDSA P-256 r||s
    uint8_t  reserved1[32];
}} img_header_t;</code></pre>
<p>Slot layout: <code>[header | payload]</code>. App linker <code>ORIGIN = slot_base + 0x100</code>.</p>

<h2 id="parse">2. <code>img_header_parse</code> / <code>img_payload_bounds</code></h2>
<p>Rejects bad magic/type, zero size, offset &lt; 256, or payload that would run past the slot end (with overflow checks).</p>

<h2 id="verify">3. <code>boot_verify_slot</code></h2>
<pre><code>parse header
bounds check
app_is_valid_at(payload)
SHA-256(payload) == header.sha256   // crypto_memcmp_ct
ECDSA verify(pubkey, hash, signature)
→ out_jump_addr = payload_addr</code></pre>
<p>Error codes distinguish parse vs hash vs signature failures for serial debugging (<code>BL: ok %08lX</code> on success).</p>

{footer(11)}"""

BODIES[12] = lambda: f"""{nav(12)}
<p>Source: {src("bootloader/lib/boot/src/ota.c")}, {src("bootloader/lib/boot/inc/ota.h")} — framing half.</p>

<h2 id="frame">1. Frame format</h2>
<pre><code>STX(0x02) | CMD | LEN_L | LEN_H | PAYLOAD[len] | CRC16_L | CRC16_H | ETX(0x03)</code></pre>
<ul>
  <li>Commands: <code>START=0x01</code>, <code>DATA=0x02</code>, <code>END=0x03</code></li>
  <li>Responses: <code>ACK=0x06</code>, <code>NACK=0x15</code> (single byte)</li>
  <li>Chunk size: 256 bytes max payload data</li>
</ul>

<h2 id="fsm">2. RX state machine</h2>
<pre><code>RX_WAIT_STX → CMD → LEN_L → LEN_H → PAYLOAD* → CRC_L → CRC_H → ETX</code></pre>
<p><code>ota_receive_frame()</code> consumes one byte per call from the UART ring (with idle timeout). CRC-16/CCITT-ish (<code>poly 0x1021</code>, init <code>0xFFFF</code>) covers <code>CMD|LEN|PAYLOAD</code>.</p>

<h2 id="idle">3. Idle timeout</h2>
<p><code>uart_rx_byte</code> refreshes the deadline when a frame is in progress or STX arrives. Pure idle for <code>OTA_IDLE_TIMEOUT_MS</code> (5 s default) returns to <code>main</code> so a hung host cannot wedge the bootloader forever.</p>

<h2 id="iwdg">4. Watchdog</h2>
<p>Each wait loop calls <code>Iwdg_Feed()</code> so multi-second transfers stay alive.</p>

{footer(12)}"""

BODIES[13] = lambda: f"""{nav(13)}
<p>Source: {src("bootloader/lib/boot/src/ota.c")} — command handlers and slot swap.</p>

<h2 id="start">1. START</h2>
<p>Payload carries firmware size / CRC metadata expected by the host tool. Handler selects <strong>inactive</strong> slot base, records <code>fw_write_addr</code>, erases required pages, resets sequence counters, ACKs.</p>

<h2 id="data">2. DATA</h2>
<p>Each chunk: sequence number + up to 256 data bytes. Writes via <code>flash_write_buffer</code> at the running address. After enough bytes exist, <code>ota_early_slot_check()</code> parses the IMG1 header and verifies the vector table belongs to <em>this</em> slot — rejecting a wrong-linked image before the transfer finishes.</p>

<h2 id="end">3. END</h2>
<ol>
  <li>Confirm length / CRC32 of what was written (as implemented in the file).</li>
  <li><code>boot_verify_slot</code> on the inactive slot (SHA-256 + ECDSA).</li>
  <li>Update <code>ota_config_t</code>: flip <code>active_slot</code> to the newly programmed slot.</li>
  <li>ACK, then <code>jump_to_application</code> — success does not return to <code>main</code>.</li>
</ol>

<h2 id="abort">4. Abort / NACK</h2>
<p>Once <code>fw_aborted</code> is set (bad header, wrong slot, verify fail), subsequent frames NACK until the session ends. The previous active slot remains bootable.</p>

{footer(13)}"""

BODIES[14] = lambda: f"""{nav(14)}
<p>Source: {src("application/Src/main.c")}, {src("application/Src/ota_req.c")}.</p>

<h2 id="app-main">1. Application <code>main</code></h2>
<p>Same bring-up as the bootloader (clock, GPIO, UART), then:</p>
<ul>
  <li>Prints which app started and the OTA key hint.</li>
  <li>Enables IWDG.</li>
  <li>Loop: poll for <code>'U'</code>, print heartbeat, toggle PC13, feed watchdog, <code>delay_ms(1000)</code>.</li>
</ul>

<h2 id="ota-req">2. <code>ota_request_enter</code></h2>
<pre><code>guess active slot from APP_FLASH_ORIGIN (APP1 vs APP2 payload address)
write ota_config_t {{ magic = 0xDEADBEEF, active_slot = … }}
system reset via AIRCR SYSRESETREQ</code></pre>
<p>Bootloader sees the flag and enters OTA without waiting for the 3 s window.</p>

<h2 id="link">3. Link offsets</h2>
<p>Two app builds (or two linker scripts) place the vector table at <code>APP1_START+0x100</code> (<code>0x08005900</code>) or <code>APP2_START+0x100</code> (<code>0x0800AB00</code>). Signing wraps that raw <code>.bin</code> with the 256-byte header; the slot image base is the APP1/APP2 start address.</p>

{footer(14)}"""

BODIES[15] = lambda: f"""{nav(15)}
<p>Source: {src("bootloader/STM32F103C8TX_FLASH.ld")}, {src("application/STM32F103C8TX_FLASH.ld")}, {src("bootloader/Startup/startup_stm32f103c8tx.s")}, {src("application/Startup/startup_stm32f103c8tx.s")}.</p>

<h2 id="bl-ld">1. Bootloader linker</h2>
<pre><code>FLASH (rx) : ORIGIN = 0x08000000, LENGTH = 22K
RAM        : ORIGIN = 0x20000000, LENGTH = 20K</code></pre>
<p>Vectors live at the start of Flash — ST-Link boots the bootloader after every reset.</p>

<h2 id="app-ld">2. Application linker</h2>
<p>FLASH ORIGIN is the <strong>payload</strong> address (slot + 256), not the slot base. Length must fit under the remaining slot size after the header. VTOR is remapped at jump time to that payload address.</p>

<h2 id="startup">3. Startup</h2>
<p>Standard Cube-style <code>startup_stm32f103c8tx.s</code>: copy data, zero BSS, call <code>SystemInit</code> (if present), branch to <code>main</code>. The important OTA detail is not the assembly itself — it is that <strong>each image's vector table must match its link address</strong>, which <code>app_is_valid_at</code> enforces.</p>

{footer(15)}"""

BODIES[16] = lambda: f"""{nav(16)}
<p>Source: {src("bootloader/tools/main.py")}, {src("bootloader/tools/serial.py")}, {src("bootloader/tools/sign_image.py")}, plus Part 2 <code>keygen.py</code>.</p>

<h2 id="sign">1. <code>sign_image.py</code></h2>
<pre><code>payload = read(app.bin)
digest = SHA-256(payload)
sig = ECDSA_P256_sign(digest)   # r||s 64 bytes via keygen.derive_signing_key()
header = pack(IMG1 fields) + digest + sig + pad to 256
write header + payload</code></pre>

<h2 id="serial">2. <code>serial.py</code></h2>
<p>Small helper around PySerial port open/close used by the uploader (or inlined patterns in <code>main.py</code> depending on revision).</p>

<h2 id="main">3. <code>main.py</code> host uploader</h2>
<ul>
  <li>Load <code>.bin</code> / Intel HEX.</li>
  <li>Optional <code>--sign</code> to produce a slot image.</li>
  <li><code>--enter-ota</code> spam <code>U</code> / wait for bootloader banner.</li>
  <li>Send START → DATA chunks (256 B) → END with CRC16 frames matching <code>ota.c</code>.</li>
  <li>Wait ACK/NACK; log device printf lines on the same UART.</li>
</ul>
<pre><code>python main.py COM6 path/to/app.bin --sign --enter-ota</code></pre>

<h2 id="end">4. Series wrap-up</h2>
<p>You now have the full path: keys → signed IMG1 → bare-metal drivers → dual-slot bootloader → UART protocol → app request flag → host tool. Clone <a href="{REPO}" target="_blank" rel="noopener noreferrer">STM32F103C8T6-ota-base-metal</a>, flash the bootloader once with ST-Link, and iterate apps over serial.</p>

{footer(16)}"""


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for n, slug, _title, stem in PARTS:
        html = BODIES[n]()
        path = OUT / f"{stem}.body.html"
        path.write_text(html, encoding="utf-8")
        print("wrote", path.name, len(html), "chars")


if __name__ == "__main__":
    main()
