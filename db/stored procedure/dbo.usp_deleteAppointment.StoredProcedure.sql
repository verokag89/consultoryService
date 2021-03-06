USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_deleteAppointment]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	delete Appointments BY ID
-- =============================================
CREATE PROCEDURE [dbo].[usp_deleteAppointment]
	-- Add the parameters for the stored procedure here
	@pIdAppointment int
AS
BEGIN
	SET NOCOUNT ON;


	DELETE
	FROM
		Appointment
	WHERE [IdAppointment] = @pIdAppointment
END
GO
