import React, { useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-kakao-maps';

const App = () => {
  useEffect(() => {
    const loadMap = async () => {
      const onMapViewLoad = () => {
        const center = new window.kakao.maps.LatLng(37.5665, 126.9780);
        const map = new window.kakao.maps.Map(document.getElementById('map'), {
          center,
          level: 8,
        });

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch('헬스장', (data, status, pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {
            for (let i = 0; i < data.length; i++) {
              const place = data[i];
              const marker = new window.kakao.maps.Marker({
                map,
                position: new window.kakao.maps.LatLng(place.y, place.x),
              });
              const infowindow = new window.kakao.maps.InfoWindow({
                content: place.place_name,
              });
              window.kakao.maps.event.addListener(marker, 'click', () => {
                infowindow.open(map, marker);
              });
            }
          }
        });
      };

      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_JS_APP_KEY&autoload=false`;
      script.onload = () => {
        window.kakao.maps.load(onMapViewLoad);
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    loadMap();
  }, []);

  return <View style={{ flex: 1 }} id="map" />;
};

export default App;
