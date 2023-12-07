import { FormControl, Select, MenuItem } from "@mui/material"

const combo_sx = {
    border: "0px solid #dee2e6",
    fontFamily: '"Poppins", sans-serif',
    fontSize: '13px',
    color: '#697280ff',
    boxShadow: 'rgba(0, 0, 0, 0.01) 0px 4px 12px',
    padding: '3px 0px',
}

const ComboBox = ({ id, value, method, list, disabled}) => {

    return (
        <FormControl size="small" sx={{ width: '100%'}}>
            <Select
                value={value}
                displayEmpty
                sx={combo_sx}
                name={id}
                onChange={method}
            >
                {
                    list.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item}><p className="quicksand darkblue text-15">{item}</p></MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default ComboBox