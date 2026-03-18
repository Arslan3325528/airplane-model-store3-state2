import PropTypes from 'prop-types';
import css from "./PlanesList.module.css"; 
// import { Planes } from '@/components/Planes/PlanesOld.jsx'; //? Блок зображень без модальни вікон */ 
import { Planes } from '@/components/Planes/Planes.jsx'; //? Модальні вікна для блока зображень з Yet Another React Lightbox

import { getBgColorCSSModule } from '@/utils'; 


export function PlanesList({ items }) {
    return (
        <ul className={css.planesList}>
            {items.map(item => 
                <li
                    className={css[getBgColorCSSModule(item.info.year)]}
                    key={item.id}
                >
                    <Planes
                        aircraftType={item.aircraftType}
                        wikipediaPage={item.url.wikipedia}
                        urlMain={item.url.main}
                        urlPromotional={item.url.promotional}
                        urlActual={item.url.actual}
                        urlActualFull={item.url.actualFull}
                        nameBrief={item.name.brief}
                        nameFull={item.name.full}
                        nickname={item.name.nickname}
                        year={item.info.year}
                        country={item.info.country}
                        type={item.info.type}
                        price={item.info.price}
                        description={item.info.description}
                        manufacturingStart={item.manufacturing.start}
                        manufacturingEnd={item.manufacturing.end}
                    />
                </li>
            )}
        </ul>
    );
};

PlanesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

