import { Dialog } from "../lib/Dialog";
import { DialogActions } from "../lib/DialogActions";
import { DialogContent } from "../lib/DialogContent";
import { DialogHeader } from "../lib/DialogHeader";
import useDialog from "../lib/hooks/useDialog";
import * as S from "../lib/styles/styles"
import "./style.css"


export const TestTemplate = () => {
  const { dialogRef, isOpen ,toggleDialog } = useDialog();

  return (
    <>
      <div className="test-docs">
        <div>Dialog Component #1</div>
        <p>- use dialog HTML tag</p>
        <p>- Scrollable in Dialog Content Area</p>
        <p>- Add animate Prop for on/off animation</p>
      </div>
      <div className="test-btn-area">
        <button className="test-btn"
          onClick={() => {
            toggleDialog();
          }}
        >
          OPEN DIALOG
        </button>
      </div>

        <Dialog  
          ref={dialogRef}
          toggleDialog={toggleDialog}
          isOpen={isOpen}
          style={{
            width: 520,
          }}
          animate
        >
          <DialogHeader>
            <Head />
          </DialogHeader>
          <DialogContent toggleDialog={toggleDialog}>
            <Content />
          </DialogContent>
          <DialogActions>
            <S.ActionButton onClick={toggleDialog}>Agree</S.ActionButton>
            <S.ActionButton onClick={toggleDialog}>DisAgree</S.ActionButton>
          </DialogActions>
        </Dialog>
    </>
  );
}

export const Head = () => {
  return(
    <div
    style={{
      padding: "15px 20px",
      fontSize: "1.1em",
    }}
    >
      Header Area
    </div>
  )
}

export const Content = () => {
  return(
    <div
    style={{
      padding: "10px 20px",
      fontSize: "1em",
      height: 1000,
    }}
    >
      Content Area
    </div>
  )
}