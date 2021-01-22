CREATE DATABASE FoodDelivery
GO

CREATE TABLE [dbo].[Clients](
	[ClientID] [uniqueidentifier] PRIMARY KEY,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](100) NOT NULL,
	[Address2] [nvarchar](100) NULL,
	[City] [nvarchar](100) NOT NULL,
	[State] [nvarchar](100) NOT NULL,
	[Zip] [nvarchar](10) NOT NULL,
	[Phone] [varchar](20) NOT NULL,
	[Email] [varchar](100) NOT NULL
)
GO

CREATE TABLE [dbo].[Dishes](
	[DishID] [uniqueidentifier] PRIMARY KEY,
	[DishTypeID] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Price] [float] NOT NULL,
	[Amount] [nvarchar](15) NOT NULL,
	[Vegan] [bit] NULL,
	[Description] [nvarchar](200) NULL
)
GO

CREATE TABLE [dbo].[DishTypes](
	[DishTypeID] [uniqueidentifier] PRIMARY KEY,
	[Name] [nvarchar](20) NOT NULL,
	[Order] [int] NOT NULL
)
GO

CREATE TABLE [dbo].[OrderItems](
	[OrderItemID] [uniqueidentifier] PRIMARY KEY,
	[OrderID] [uniqueidentifier] NOT NULL,
	[DishID] [uniqueidentifier] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Notes] [nvarchar](200) NULL
)
GO

CREATE TABLE [dbo].[Orders](
	[OrderID] [uniqueidentifier] PRIMARY KEY,
	[ClientID] [uniqueidentifier] NOT NULL,
	[OrderTime] [datetime] NOT NULL,
	[DeliveryTime] [datetime] NULL,
	[TotalPrice] [float] NOT NULL
)
GO

-- Foreign Keys

ALTER TABLE [dbo].[Dishes] ADD CONSTRAINT [C1] FOREIGN KEY([DishTypeID])
REFERENCES [dbo].[DishTypes] ([DishTypeID])
GO

ALTER TABLE [dbo].[OrderItems] ADD CONSTRAINT [C2] FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO

ALTER TABLE [dbo].[OrderItems] ADD CONSTRAINT [C3] FOREIGN KEY([DishID])
REFERENCES [dbo].[Dishes] ([DishID])
GO

ALTER TABLE [dbo].[Orders] ADD CONSTRAINT [C4] FOREIGN KEY([ClientID])
REFERENCES [dbo].[Clients] ([ClientID])
GO

-- View

CREATE VIEW [dbo].[MenuItems]
AS
	SELECT [DishID],
		   D.[Name] AS Dish,
		   [Price],
		   [Amount],
		   [Vegan],
		   [Description],
		   T.[Name] AS DishType,
		   [Order]
	FROM [Dishes] AS D
	 JOIN [DishTypes] AS T ON D.[DishTypeID]=T.[DishTypeID]
GO
