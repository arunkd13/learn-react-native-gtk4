import React, { useState } from "react"
import {
  ApplicationWindow,
  Button,
  Box,
  SingleFileDialog,
  useApplication,
  Gtk
} from "react-native-gtk4"

export default function App() {
  const { quit } = useApplication()
  const [showFileDialog, setShowFileDialog] = useState(false)

  return (
    <ApplicationWindow title="Learn react-native-gtk4" onCloseRequest={quit}>
      <Box orientation={Gtk.Orientation.VERTICAL}>
        <Button onClicked={() => setShowFileDialog(true)}>Open Corestore...</Button>
        {showFileDialog ? (
          <SingleFileDialog
            onCancelled={() => console.log("Cancelled")}
            onFinished={() => console.log("Finished")}
            selectionType="folder"
          />
        ) : null}
      </Box>
    </ApplicationWindow>
  )
}
