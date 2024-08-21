import './Input.scss';

const Input = ({ label, type, placeholder, name, value, onChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
