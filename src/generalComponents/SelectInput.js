import React from 'react'
import Select from 'react-select'

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: '1px solid #CBD5E0', 
        backgroundColor: 'rgba(209, 213, 219, 0.3)', 
        padding: '0.5rem',
        borderRadius: '0.375rem', 
        outline: 'none', 
        '&:hover': {
            boxShadow: '0 0 0 1px #CBD5E0',
          },
        '&:focus': {
            border: '1px solid #CBD5E0 !important', 
        },
    }),
};

const SelectInput = ({ label, options, id, isMulti, onChange}) => {
    return (
        <div className='mb-5'>
            <label className="text-13px md:text-16px font-semibold mb-2" htmlFor={id}>
                {label}
            </label>
            <div>
                <Select
                    isMulti={isMulti}
                    id={id}
                    name="type"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    options={options}
                    onChange={onChange}
                    styles={customStyles}
                    className='mt-1'
                    
                />
            </div>

        </div>
    )
}

export default SelectInput