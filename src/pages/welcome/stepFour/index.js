import Form from '../../../components/form'

const StepFour = ({data, setData})=>{
    const splitWord = data.bio.trim(/\s+/g, '').length;

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
                <textarea
                onChange={setData}
                value={data.bio}
                name="bio"
                placeholder = "Tell use about yourself, your educational and professional highlight to date"
                label={'Bio'}
                type={"textarea"}
                maxLength={3000}
                />

            <p className='word-count'>
                {splitWord}/3000
            </p>
            </div>
    
        </Form>
     </>

    )
}

export default StepFour


