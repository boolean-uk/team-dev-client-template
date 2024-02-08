import Form from '../../../components/form'
import TextInput from '../../../components/form/textInput'

const StepFour = ({data, setData})=>{
    return(
     <>
        <div className='welcome-formheader'>
            <h3>
                Bio
            </h3>
        </div>
        <Form className={"welcome-form"}>
            <p>Bio</p>
            <div className="welcome-form-inputs">
                <TextInput
                onChange={setData}
                value={data.bio}
                name="bio"
                placeholder = "Tell use about yourself, your educational and professional highlight to date"
                label={'Bio'}
                type={"textarea"}
                />
            </div>
        </Form>
     </>

    )
}

export default StepFour