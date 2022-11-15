import { ReactNode } from 'react'
import { useModal } from 'react-modal-hook'
import { Dialog, DialogProps } from '../../components'


type UseDialogProps = {
  onClose?: () => void
  content: string | ReactNode
} & Omit<DialogProps, 'open' | 'children'>

export const useDialog = (
  { content, onClose, ...rest }: UseDialogProps,
  deps: any[] = []
) => {
  const [showModal, closeModal] = useModal(
    ({ in: open, onExited }) => (
      <Dialog
        open={open}
        onClose={() => {
          onClose && onClose()
          closeModal()
        }}
        {...rest}
      >
        {content}
      </Dialog>
    ),
    deps
  )

  return [showModal, closeModal]
}
