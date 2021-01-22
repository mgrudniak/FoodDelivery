USE [FoodDelivery]
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'e5863999-2468-4bb0-9c67-0d4c68437b05', N'Cold Beverage', 25)
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'f5977408-5cd1-4194-b977-1553fd4ea181', N'Hot Beverage', 30)
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'a75aad5f-ac9a-4090-abda-29f3b2d8ed22', N'Alcoholic Beverage', 35)
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'7d0de54a-b920-4bf0-9124-38522ec963ed', N'Soup', 10)
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'b2c005cb-ad69-4d45-9679-84fe7f823d9e', N'Cold Starter', 0)
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'2731921f-80be-4771-ac59-ae5517dfa8ef', N'Hot Starter', 5)
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'ea03e637-ab66-4e93-8ee1-e67bfbec8e92', N'Main Course', 15)
GO
INSERT [dbo].[DishTypes] ([DishTypeID], [Name], [Order]) VALUES (N'e0804061-cc00-4795-bf1f-f7efe721b06e', N'Dessert', 20)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'9c7b6b34-a6cc-470a-96f8-033d392ede8c', N'e5863999-2468-4bb0-9c67-0d4c68437b05', N'Water', 2, N'500ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'89be80b0-c04f-4807-a602-127297c35e8d', N'f5977408-5cd1-4194-b977-1553fd4ea181', N'Latte macchiato', 5.5, N'150ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'edc84fe4-c6af-46b6-acb3-1748a5156267', N'7d0de54a-b920-4bf0-9124-38522ec963ed', N'Chicken noodle soup', 6, N'300ml', 0, N'Traditional Polish soup based on chicken and vegetables. Served with carrot and parsley.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'b11def48-c152-45e5-8c9a-2df2701fd610', N'b2c005cb-ad69-4d45-9679-84fe7f823d9e', N'Chipotle portobello tacos', 10, N'3pcs/200g', 1, N'Made with roasted portobello mushrooms and peppers, fresh avocado, pickled onion and with vegan cilantro cream.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'05920d19-10d3-470a-9386-48f1ca7ce5ce', N'a75aad5f-ac9a-4090-abda-29f3b2d8ed22', N'Vodka', 5.5, N'40ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'6287afc6-a5ef-4bba-abcd-525cc2c4977e', N'2731921f-80be-4771-ac59-ae5517dfa8ef', N'Stuffed mushrooms', 7, N'5pcs/200g', 0, N'Mushrooms stuffed with bacon and mozzarella cheese, garnished with chives. Served with aioli sauce.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'595ca7f7-8bbe-4467-884a-5622586e8bc9', N'a75aad5f-ac9a-4090-abda-29f3b2d8ed22', N'Wine', 11, N'150ml', NULL, N'Red/White/Rosé')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'd6378cc3-5427-4a9f-8c97-5d53b3b7db9f', N'f5977408-5cd1-4194-b977-1553fd4ea181', N'Espresso', 3, N'25ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'0f4b7329-4f6f-4e02-822d-695681c0de99', N'7d0de54a-b920-4bf0-9124-38522ec963ed', N'Cream of tomato soup', 7, N'300ml', 1, N'Made with fresh tomatoes and basil. Served with buttery croutons.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'767ced90-fe1b-42fa-86ec-6eb5313f6fe4', N'b2c005cb-ad69-4d45-9679-84fe7f823d9e', N'Horse meat tartare', 17, N'200g', 0, N'Chopped horse sirloin served with onion, pickles, pickled mushrooms and egg yolk.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'5e9e434d-2c83-4ba7-8d45-7ea3c75d536d', N'a75aad5f-ac9a-4090-abda-29f3b2d8ed22', N'Beer', 9, N'500ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'70ca8ad0-1f84-49b5-ac5a-a103755a5949', N'ea03e637-ab66-4e93-8ee1-e67bfbec8e92', N'Fried trout fillet', 22, N'250g', 0, N'Fresh trout served with roasted potatoes and assorted salad greens.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'd529bb18-c3b5-4c2c-8911-a1a4ecc56ae0', N'a75aad5f-ac9a-4090-abda-29f3b2d8ed22', N'Whisky', 7, N'40ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'a20e8076-d155-4072-90cf-af2a003fb938', N'f5977408-5cd1-4194-b977-1553fd4ea181', N'Cappuccino', 5.5, N'150ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'1f27e899-908b-41a5-8fe2-c77097981ccf', N'ea03e637-ab66-4e93-8ee1-e67bfbec8e92', N'Filet mignon', 39, N'200g', 0, N'Seasoned beef tenderloin steak served with garlic butter, roasted potatoes and assorted salad greens.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'c9672a0e-f90c-4128-9417-cb4699639e12', N'f5977408-5cd1-4194-b977-1553fd4ea181', N'Alternative method coffee', 4.5, N'180ml', NULL, N'Chemex, Drip, Moka Pot, French press, Aeropress, Syphon')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'1c703255-781d-4ab4-aea6-e12dec8d4f62', N'f5977408-5cd1-4194-b977-1553fd4ea181', N'Americano', 4.75, N'180ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'd279cb3c-0f7e-434d-9767-efbb2ed3bf3f', N'f5977408-5cd1-4194-b977-1553fd4ea181', N'Espresso macchiato', 3.5, N'40ml', NULL, NULL)
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'9eef236f-60a9-4e0e-9bee-f09fa840dc93', N'e0804061-cc00-4795-bf1f-f7efe721b06e', N'Panna cotta', 7, N'150g', 0, N'Italian dessert made with cream and fresh vanilla, served with raspberry sauce.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'79ccc4b1-b1f4-4be4-bec3-f6eca45ffd64', N'e0804061-cc00-4795-bf1f-f7efe721b06e', N'Cheesecake', 8, N'150g', 0, N'New York-style cheesecake with chocolate mousse.')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'5c90d273-f667-481c-b56e-fb80150a1fe1', N'e5863999-2468-4bb0-9c67-0d4c68437b05', N'Freshly squeezed juice', 5, N'200ml', 1, N'Orange, apple, pineapple, grape')
GO
INSERT [dbo].[Dishes] ([DishID], [DishTypeID], [Name], [Price], [Amount], [Vegan], [Description]) VALUES (N'810a8474-f47a-4de5-a2bc-fe227acbefea', N'ea03e637-ab66-4e93-8ee1-e67bfbec8e92', N'Ratatouille', 19, N'400g', 1, N'Traditional French vegetable stew, made with aubergines, courgettes, peppers and tomatoes.')
GO
