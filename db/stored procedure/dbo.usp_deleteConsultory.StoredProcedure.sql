USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_deleteConsultory]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Delete Consultory by Id
-- =============================================
CREATE PROCEDURE [dbo].[usp_deleteConsultory]
	@pIdConsultory INT
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here
	DELETE FROM Consultory
	WHERE [IdConsultory] = @pIdConsultory

	 

END
GO
