import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const ToggleSwitch = ({ checked, onClick }: Props) => {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        checked={checked}
        onClick={onClick}
        readOnly
      />
      <div className="w-11 h-6 rounded-full peer bg-[#494A4B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-highlight"></div>
    </label>
  );
};

export default ToggleSwitch;
