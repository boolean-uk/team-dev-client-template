import Form from '../../../components/form';
import TextInput from '../../../components/form/textInput';

const StepThree = ({ data, setData }) => {
  return (
    <>
      <div className="welcome-formheader">
        <h3>Training info</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-inputs">
          <TextInput value={data.role} name="role" label={'Role*'} isLocked={true} />
          <TextInput
            value={data.specialism}
            name="specialism"
            label={'Specialism*'}
            isLocked={true}
          />
          <TextInput value={data.cohort} name="cohort" label={'Cohort*'} isLocked={true} />
          <TextInput
            value={data.startDate}
            name="startDate"
            label={'Start Date*'}
            isLocked={true}
          />
          <TextInput value={data.endDate} name="endDate" label={'End Date*'} isLocked={true} />
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepThree;
