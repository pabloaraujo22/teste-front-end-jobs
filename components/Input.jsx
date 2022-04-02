import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Input(props) {
    const { label, name, defaultValue = '' } = props;
    const [value, setValue] = useState(defaultValue);

    return (
        <TextField
            fullWidth
            label={label}
            name={name}
            value={value}
            color="secondary"
            variant="outlined"
            onChange={(e) => {
                setValue(e.target.value);
                props.handleOnChange({
                    name,
                    value: e.target.value,
                });
            }}
            required
        />
    );
}
