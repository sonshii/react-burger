import React from "react";
import PropTypes from "prop-types";
import IngridientDetailsStyle from "./ingredient-details.module.css";

function IngridientDetails(props) {
    if (!props.ingredients) {
        return null;
    }
    return (
        <div className={IngridientDetailsStyle.wrapper}>
            <img
                src={props.ingredients.image_large}
                alt="img"
                className="ml-30 mr-30 mb-4"
            />
            <p className="text text_type_main-medium">
                {props.ingredients.name}
            </p>
            <div className={`${IngridientDetailsStyle.kbzhu} mt-8 mb-15`}>
                <div className={`${IngridientDetailsStyle.blockKbzhu} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Калории,ккал
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingredients.calories}
                    </p>
                </div>
                <div className={`${IngridientDetailsStyle.blockKbzhu} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Белки,г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingredients.proteins}
                    </p>
                </div>
                <div className={`${IngridientDetailsStyle.blockKbzhu} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры,г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingredients.fat}
                    </p>
                </div>
                <div className={IngridientDetailsStyle.blockKbzhu}>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы,г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {props.ingredients.carbohydrates}
                    </p>
                </div>
            </div>
        </div>
    );
}
const dataShape = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    image_large: PropTypes.string,
});
IngridientDetails.propTypes = {
    ingredients: dataShape,
};

export default IngridientDetails;
