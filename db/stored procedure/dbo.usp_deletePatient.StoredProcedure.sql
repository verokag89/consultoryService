USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_deletePatient]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 08/10/2018
-- Description:	Delete Patient
-- =============================================
CREATE PROCEDURE [dbo].[usp_deletePatient]
	@pPatientId INT
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	DELETE  FROM  Patient
	WHERE IdPatient = @pPatientId


END
GO
