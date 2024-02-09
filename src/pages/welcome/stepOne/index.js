import Form from "../../../components/form";
import TextInput from "../../../components/form/textInput";

const StepOne = ({ data, setData }) => {
  return (
    <>
      <div className="welcome-formheader">
        <h3>Basic info</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-inputs">
          <TextInput
            onChange={setData}
            value={data.pictureUrl}
            name="pictureUrl"
            label={'Photograph'}
            placeholder="please enter a valid image url"

            
          />

          <TextInput
            onChange={setData}
            value={data.firstName}
            name="firstName"
            label={"First name*"}
            placeholder="enter your first name"
            required
          />
          <TextInput
            onChange={setData}
            value={data.lastName}
            name="lastName"
            label={"Last name*"}
            placeholder="enter your last name"
            required
          />
          <TextInput
            onChange={setData}
            value={data.githubUsername}
            name="githubUsername"
            label={"Github Username*"}
            placeholder="enter your github user name"
            required
          />
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepOne;
