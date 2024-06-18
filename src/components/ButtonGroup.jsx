import Button from "./Button.jsx"

const secondaryButtons = [
    "Mark all as complete",
     "Mark all as incomplete",
      "Reset to initial",
       "Remove all items"];

const ButtonGroup = () => {

  return (
    <section className="button-group">
        {
            secondaryButtons.map((buttonText) => {
                return <Button key={buttonText} type="secondary">{buttonText}</Button>
            })
        }
      {/* <Button type='secondary' text="Mark all as complete"/>
      <Button type='secondary' text="Mark all as incomplete"/>
      <Button type='secondary' text="Reset to initial"/>
      <Button type='secondary' text="Remove all items"/> */}
    </section>
  )
}

export default ButtonGroup
