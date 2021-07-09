import React from "react";
import PropTypes from "prop-types";
import IngridientDetailsStyle from "./ingredient-details.module.css";

function IngridientDetails(props) {
    if (!props.ingridients) {
        return null;
    }
    return (
        <div className={IngridientDetailsStyle.wrapper}>
            <img
                src={props.ingridients.image_large}
                alt="img"
                className="ml-30 mr-30 mb-4"
            />
            <p className="text text_type_main-medium">
                {props.ingridients.name}
            </p>
            <div className={`${IngridientDetailsStyle.kbzhu} mt-8 mb-15`}>
                <div className={`${IngridientDetailsStyle.blockKbzhu} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Калории,ккал
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingridients.calories}
                    </p>
                </div>
                <div className={`${IngridientDetailsStyle.blockKbzhu} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Белки,г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingridients.proteins}
                    </p>
                </div>
                <div className={`${IngridientDetailsStyle.blockKbzhu} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры,г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingridients.fat}
                    </p>
                </div>
                <div className={IngridientDetailsStyle.blockKbzhu}>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы,г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingridients.carbohydrates}
                    </p>
                </div>
            </div>
        </div>
    );
}
const dataShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
});
IngridientDetails.propTypes = {
    ingridients: dataShape,
};

export default IngridientDetails;
