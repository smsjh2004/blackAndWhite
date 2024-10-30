import { useEffect } from "react";


export function RestaurantMap() {

    const { kakao } = window;

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };

        const map = new kakao.maps.Map(container, options);

    }, [kakao.maps.LatLng, kakao.maps.Map])
    return (
        <div id="map" style={{ width: "100%", maxWidth: 750, height: 500, margin: 0 }}></div>
    )
}

export default RestaurantMap