import React from "react";
import { useNavigate } from "react-router-dom";
import backImg from "../../../assets/iotnewimages/back-img.png"

const BackButton = ()=>{
    const navigate = useNavigate()
    const handelGoBack = ()=>{
        navigate(-1)
    }
    return(
        <button type="button" onClick={handelGoBack} className="backImgBtn">
            <img src={backImg} alt="back" />
        </button>
    )
}
export default BackButton;