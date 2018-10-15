USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_saveAppointment]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Save Appointments 
-- =============================================
CREATE PROCEDURE [dbo].[usp_saveAppointment]
	-- Add the parameters for the stored procedure here
	@pUserId int,
    @pPatientId int,
	@pComments NVARCHAR(350),
	@pStatus int,
	@pDate Nvarchar(10)
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here
	INSERT INTO  ApAppointment (IdUser, IdPatient, Comments, [Status],[Date])
	VALUES (@pUserId, @pPatientId,@pComments, @pStatus ,@pDate)
END
GO
