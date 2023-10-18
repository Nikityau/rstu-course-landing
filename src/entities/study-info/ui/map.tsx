import React from 'react';

const Map = () => {
    return (
        <section
            className={'study-info__map'}
            style={{
            position: 'relative',
            overflow: 'hidden'
        }}
        >
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.700562%2C47.248871&mode=poi&poi%5Bpoint%5D=39.697791%2C47.250379&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1275407510&z=17.33"
                width="100%" height="100%" frameBorder="0" allowFullScreen={true} style={{
                position: 'relative'
            }}>

            </iframe>
        </section>
    );
};

export default Map;