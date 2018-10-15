USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getConsultoryById]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Get Consultory by Id
-- =============================================
CREATE PROCEDURE [dbo].[usp_getConsultoryById]
	@pConsultoryId INT
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here
	SELECT [IdConsultory],[Name],[Phone],[Location] FROM Consultory
	WHERE [IdConsultory] = @pConsultoryId
	ORDER BY [Name]
	 

END
GO
