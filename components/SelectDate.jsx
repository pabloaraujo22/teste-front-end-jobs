import TextField from '@mui/material/TextField';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import moment from 'moment';
import 'moment/min/locales.min';
import { MobileDatePicker } from '@mui/lab';
import { useEffect, useState } from 'react';

export default function SelectDate(props) {
    const { name, label, defaultValue = null, handleOnChange } = props;

    const [value, setValue] = useState(defaultValue);

    function handleChange(e) {
        setValue(e);
        handleOnChange({ name, value: e });
    }

    moment.locale('pt-br');

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
                color="secondary"
                label={label}
                value={value}
                inputFormat="DD/MM/yyyy"
                mask="__/__/____"
                onChange={handleChange}
                renderInput={(params) => (
                    <TextField
                        fullWidth
                        color="secondary"
                        {...params}
                        required
                    />
                )}
            />
        </LocalizationProvider>
    );
}
