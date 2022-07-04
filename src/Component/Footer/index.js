import { Box } from '@mui/material'
import React from 'react'
import { footerStyles } from '../DashBoard/styles'

const Footer = () => {
  const classes = footerStyles()

  return (
    <Box className={classes.footer}>Copyright © Your Website 2022.</Box>
  )
}
export default Footer