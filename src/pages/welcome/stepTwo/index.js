import Form from '../../../components/form'
import TextInput from '../../../components/form/textInput'

const StepTwo = ({ data, setData }) => {
  console.log(data)

  return (
    <>
      <div className="welcome-formheader">
        <h3>Contact Info</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-inputs">
          <TextInput
            onChange={setData}
            value={data.email}
            name="email"
            label={'Email'}
            type="text"
          />
          <TextInput
            onChange={setData}
            value={data.mobile}
            name="mobile"
            label={'Mobile'}
            type="text"
          />
          <TextInput
            onChange={setData}
            value={data.password}
            name="password"
            label={'Password'}
            type="password"
          />
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepTwo;
