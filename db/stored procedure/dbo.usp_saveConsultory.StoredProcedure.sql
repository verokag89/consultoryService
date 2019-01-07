USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_saveConsultory]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Save User
-- =============================================
CREATE PROCEDURE [dbo].[usp_saveConsultory]
	@pName NVARCHAR(250),
	@pLocation NVARCHAR(250),
	@pPhone NVARCHAR(250)
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	INSERT INTO  Consultory ([Name],[Location],[Phone])
	VALUES (@pName, @pLocation, @pPhone)

END
GO
