USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_updateAppointmentById]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Update Appointments 
-- =============================================
CREATE PROCEDURE [dbo].[usp_updateAppointmentById]
	-- Add the parameters for the stored procedure here
	@pUserId int,
    @pPatientId int,
	@pComments NVARCHAR(350),
	@pStatus int,
	@pDate Nvarchar(10),
	@pIdAppointment int
AS
BEGIN
	SET NOCOUNT ON;


	UPDATE Appointment 
	SET
	IdUser =@pUserId,
	IdPatient =@pPatientId,
	Comments=@pComments,
	[Status]=@pStatus,
	[Date] =@pDate
	WHERE [IdAppointment ] = @pIdAppointment
END
GO
