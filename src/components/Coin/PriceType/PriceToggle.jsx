import { useState } from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles';

export default function PriceToggle({priceType,handlePriceChanges}) {
    const theme = useTheme();
    

    return (
        <div className='flex justify-center items-center  mb-4 '>
            <ToggleButtonGroup
                value={priceType}
                exclusive
                onChange={handlePriceChanges}
                sx={{
                    "& .Mui-selected": {
                        color: "var(--blue) !important",
                    },
                    borderColor: "var(--blue)",
                    border: "unset !important",
                    "& .MuiToggleButtonGroup-grouped": {
                        border: "1px solid !important",
                        borderColor: "unset",
                        color: "var(--blue)",
                    },
                    "& .MuiToggleButton-standard": {
                        color: "var(--blue)",
                    },
                    [theme.breakpoints.down('md')]: {
                        "& .Mui-selected": {
                          fontSize: "0.70rem", 
                        },
                        "& .MuiToggleButtonGroup-grouped": {
                          fontSize: "0.70rem", 
                        },
                        "& .MuiToggleButton-standard": {
                          fontSize: "0.70rem", 
                        },
                      },
                    
                }}
            >
                <ToggleButton value="prices" aria-label="left aligned">Price</ToggleButton>
                <ToggleButton value="market_caps" aria-label="centered">Market Cap</ToggleButton>
                <ToggleButton value="total_volumes" aria-label="right aligned">Total Volume</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
