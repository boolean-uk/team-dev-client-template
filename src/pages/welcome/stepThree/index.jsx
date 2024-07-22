import Form from "../../../components/form";
import TextInput from "../../../components/form/textInput";
import LockIcon from "../../../assets/icons/lockIcon";

const StepThree = ({ data }) => {
  return (
    <>
      <div className="welcome-formheader">
        <h3>Training info</h3>
      </div>

      <Form className="welcome-form">
        <div className="welcome-form-inputs">
          <TextInput
            value={data.role}
            name="role"
            label={"Role*"}
            readOnly={true}
            icon={<LockIcon />}
          />

          <TextInput
            value={data.specialism}
            name="role"
            label={"Specialism*"}
            readOnly={true}
            icon={<LockIcon />}
          />

          <TextInput
            value={data.cohort}
            name="role"
            label={"Cohort*"}
            readOnly={true}
            icon={<LockIcon />}
          />

          <TextInput
            value={data.startDate}
            name="role"
            label={"Start Date*"}
            readOnly={true}
            icon={<LockIcon />}
          />

          <TextInput
            value={data.endDate}
            name="role"
            label={"End Date*"}
            readOnly={true}
            icon={<LockIcon />}
          />

          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepThree;
