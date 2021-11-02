import { FormControlLabel, TextField } from '@mui/material';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function component(data) {
  return (
    <>
      <TextField label="First name" style={{ width: '100%' }} value={data.first_name} name="firstName" id="firstName" />
      <br />
      <TextField label="Last name" style={{ width: '100%' }} value={data.last_name} name="lastName" id="lastName" />
      <br />
      <FormControl component="fieldset" style={{ width: '100%' }}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" defaultValue={data.gender} name="gender" id="gender">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <br />
    </>
  );
}
