USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getUserById]    Script Date: 1/6/2019 8:49:09 PM ******/
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
	SELECT *, p.Position, p.IdPosition FROM Users u
	inner join Position p ON (p.IdPosition= u.IdPosition)
	WHERE IdUser  = @pUserId
	ORDER BY FirstName
	 

END
GO
