USE [DBConsultory]
GO
/****** Object:  Table [dbo].[Patient]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Patient](
	[IdPatient] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](250) NULL,
	[LastName] [nvarchar](250) NULL,
	[BirthDate] [datetime] NULL,
	[Date] [datetime] NULL,
	[Phone] [nvarchar](50) NULL,
	[Active] [bit] NULL,
	[Phone2] [nvarchar](50) NULL,
	[Email] [nchar](250) NULL,
	[PatientNumber] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdPatient] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
