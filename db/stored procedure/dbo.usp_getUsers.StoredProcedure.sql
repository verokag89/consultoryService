USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getUsers]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Get All Users
-- =============================================
CREATE PROCEDURE [dbo].[usp_getUsers]
	-- Add the parameters for the stored procedure here
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here
	SELECT LastName, FirstName, IdUser, u.IdPosition, p.[Position] , [Date]  from Users u
	INNER JOIN Position p ON (p.IdPosition= u.IdPosition)

END
GO
