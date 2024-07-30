import Button from "../button";

export default function PostModalActions({ onSubmit=null, text=''}) {
    return (
        <section className="create-post-actions">
            <Button
                onClick={onSubmit}
                text="Post"
                classes={`${text.length ? 'blue' : 'offwhite'} width-full`}
                disabled={!text.length}
            />
        </section>
    )
}
