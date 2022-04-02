import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const colors = ['BLACK', 'WHITE', 'GOLD', 'PINK'];

export default function SelectColor(props) {
    const { label, name, defaultValue = '', handleOnChange } = props;
    const [value, setValue] = useState(defaultValue);

    function renderItens() {
        return colors.map((color) => {
            return (
                <MenuItem key={Math.random() * 10000} value={color}>
                    {color}
                </MenuItem>
            );
        });
    }
    return (
        <FormControl fullWidth>
            <InputLabel
                id="demo-simple-select-label"
                color="secondary"
                required
            >
                Cor
            </InputLabel>
            <Select
                required
                color="secondary"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                name={name}
                label={label}
                onChange={(e) => {
                    setValue(e.target.value);
                    handleOnChange({ name, value: e.target.value });
                }}
            >
                {renderItens()}
            </Select>
        </FormControl>
    );
}
