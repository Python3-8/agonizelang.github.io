export default function getPlatform() {
    const platform = (
        window.navigator.userAgentData?.platform || window.navigator.platform
    ).toLowerCase();
    if (/mac/.test(platform)) return "darwin";
    else if (/linux/.test(platform)) return "linux";
    else if (/win/.test(platform)) return "win32";
}
