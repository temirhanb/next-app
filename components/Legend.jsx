import {LegendCircle, LegendLi, LegendUl} from "../styled/styledMain";
import React from "react";

const legendUser = [
    {
        name: 'Высоцкая Элеонора',
        point: '#DF1B7D;'
    },
    {
        name: 'Гайсина Гузель',
        point: '#52AD5B;'
    },
    {
        name: 'Гиголо Анна',
        point: '#FE8900;'
    },
    {
        name: 'Горбукова Юлия',
        point: '#00459B;'
    }, {
        name: 'Марков Руслан',
        point: '#2E71F3;'
    }
]

export function Legend() {
    return (
        <LegendUl>
            {legendUser.map(({name, point}, index) => (
                <LegendLi
                    key={index + name}
                >
                    <LegendCircle
                        point={point}>
                    </LegendCircle>
                    {name}
                </LegendLi>
            ))}
        </LegendUl>
    )
}