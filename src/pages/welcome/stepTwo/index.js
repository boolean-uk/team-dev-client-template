import Form from '../../../components/form';
import TextInput from '../../../components/form/textInput';

const StepTwo = ({ data, setData }) => {
  return (
    <>
      <div className="welcome-formheader">
        <h3>Contact info</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-inputs">
          <TextInput value={data.email} name="email" label={'Email*'} isLocked={true} />
          <TextInput
            onChange={setData}
            value={data.mobile}
            name="mobile"
            label={'Mobile*'}
            isRequired={true}
            validChars="0-9+ -"
            maxLength={25}
          />
          <TextInput
            value={data.password}
            name="password"
            label={'Password*'}
            isLocked={true}
            type="password"
          />
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepTwo;
