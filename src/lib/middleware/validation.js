import withJoi from 'next-joi'

export default withJoi({
  onValidationError: (_, res, error) => {
    return res.status(400).json({
      status: 'failed',
      message: error.details[0].message.replace(/[^\w ]/g, ''),
    })
  },
})
