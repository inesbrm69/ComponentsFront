import React from "react";
import { InputForm } from "../../molecules";
import style from './Form.module.css'
import { Card } from "../../atoms";

const Form = ({ handler, data }) => {


    const nightTheme = (changeEvent) => {

        if (changeEvent.target.value === "night") {
            
            handler(true);

        } else {
            handler(false)
        }
    };

  return (
    <Card className={style.formStyle}>
      {data.map((x, i) => {
        let { icon, data,text } = x;
        return (
          <InputForm key={i} handler={handler} icon={icon} data={data} text={text} onChange={nightTheme}>
          </InputForm>
        );
      })}
    </Card>
  );
};

export default Form;