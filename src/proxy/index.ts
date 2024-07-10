import ProxyImage from "./ProxyImage";
import RealImage from "./RealImage";

/**
 * Proxy 패턴은 객체에 대한 접근을 제어하는 디자인 패턴입니다. 
 * 프록시 객체는 실제 객체의 대리자로서 동작하며, 접근 제어, 지연 로딩, 로깅 등의 기능을
 * 수행합니다. 이를 통해 클라이언트는 프록시를 통해 실제 객체와 상호작용하게 됩니다.
 * 프록시는 실제 객체에 대한 요청을 전달하거나 자체적으로 처리할 수 있습니다.
 */
const items = [
    ["설산야경", "https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp"],
    ["외로운늑대", "https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp"],
    ["강변황혼", "https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp"],
    ["일출", "https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp"],
    ["지구탈출", "https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp"],
    ["비둘기", "https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp"],
];

const domList = document.querySelector(".list")
items.forEach((item) => {
    const title = item[0]
    const url = item[1]
    // const img = new RealImage(title, url, domList)
    const img = new ProxyImage(title, url, domList)
    img.append()
})        