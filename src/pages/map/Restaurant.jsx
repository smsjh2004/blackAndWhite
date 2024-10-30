import { Fragment } from "react";
import RestaurantMap from "./RestaurantMap";
import { TextField } from "@mui/material";


export default function Restaurant() {
    return (
        <Fragment>
            <div>
                <RestaurantMap />
            </div>

            <TextField id="outlined-basic" label="검색" variant="outlined"  />
        </Fragment>
    )
}