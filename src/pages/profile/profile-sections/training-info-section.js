import TextInput from "../../../components/form/textInput";
import LockIcon from "../../../assets/icons/lockIcon";

const TrainingInfoSection = ({ profile, user, handleInput }) => {
  const isTeacher = user.role === "TEACHER";

  return (
    <>
      {profile.role === "STUDENT" && (
        <div className="training-info">
          <h3>Professional info</h3>
          <div className="training profile-form-inputs">
            <TextInput
              label="Role*"
              type="text"
              name="role"
              value={`${profile.role[0].toUpperCase()}${profile.role
                .slice(1)
                .toLowerCase()}`}
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Specialism*"
              type="text"
              name="specialism"
              value={profile.specialism}
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Cohort*"
              type="text"
              name="cohort"
              value={`Cohort ${profile.cohort_id}`}
              readOnly={ !isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Start Date*"
              type="text"
              name="start-date"
              value={profile.startDate}
              readOnly={true}
              icon={<LockIcon />}
            />

            <TextInput
              label="End Date*"
              type="text"
              name="end-date"
              value={profile.endDate}
              readOnly={true}
              icon={<LockIcon />}
            />
          </div>
        </div>
      )}

      {profile.role === "TEACHER" && (
        <div className="training-info">
          <h3>Professional info</h3>
          <div className="training profile-form-inputs">
            <TextInput
              label="Role*"
              type="text"
              name="role"
              value={
                profile.role[0].toUpperCase() +
                profile.role.slice(1).toLowerCase()
              }
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Specialism*"
              type="text"
              name="speacialism"
              value={profile.specialism}
              readOnly={ !isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Job Title*"
              type="text"
              name="cohort"
              value="Software Development Instructor"
              readOnly={ !isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingInfoSection;
