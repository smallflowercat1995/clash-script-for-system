const fonts = {
    mono: {
        windows: '"Roboto Mono", Consolas, "Microsoft YaHei", monospace',
        macos: '"Roboto Mono", Menlo, monospace',
        linux: '"Roboto Mono", "Liberation Mono", monospace',
    },
    sans: {
        windows: 'Roboto, "Segoe UI", "Microsoft YaHei", sans-serif',
        macos: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
        linux: 'Roboto, "Liberation Sans", sans-serif',
    },
};
let platform = 'linux';
if (navigator.userAgent.includes('Windows')) {
    platform = 'windows';
}
if (navigator.userAgent.includes('Mac OS')) {
    platform = 'macos';
}
const style = document.documentElement.style;
style.setProperty('--font-mono', fonts.mono[platform]);
style.setProperty('--font-sans', fonts.sans[platform]);
