USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getUserById]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 09/10/2018
-- Description:	Get user by Id
-- =============================================
CREATE PROCEDURE [dbo].[usp_getUserById]
	@pUserId INT
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here
	SELECT *, p.Position FROM Users u
	inner join Position p ON (p.IdPosition= u.IdPosition)
	WHERE IdUser  = @pUserId
	ORDER BY FirstName
	 

END
GO
