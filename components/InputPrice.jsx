import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import { useState } from 'react';

export default function InputPrice(props) {
    const { label, name, handleOnChange, defaultValue = '' } = props;
    const [value, setValue] = useState(defaultValue);

    return (
        <FormControl fullWidth>
            <InputLabel
                htmlFor="outlined-adornment-amount"
                color="secondary"
                required
            >
                {label}
            </InputLabel>
            <OutlinedInput
                required
                type="number"
                color="secondary"
                id="outlined-adornment-amount"
                value={value}
                name={name}
                onChange={(e) => {
                    setValue(e.target.value);
                    handleOnChange({
                        name,
                        value: parseFloat(
                            e.target.value.toString().replace(',', '.')
                        ).toFixed(2),
                    });
                }}
                startAdornment={
                    <InputAdornment position="start">R$</InputAdornment>
                }
                label={label}
            />
        </FormControl>
    );
}
